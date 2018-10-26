<template>
	<div id="MYAPP">
		<div class="header">
			<div class="logo">
				<img src="./images/zyLogo_32_min.png" alt="logo">
				<span class="title">零售担保业务系统前端开发文档</span>
			</div>
		</div>
		<div class="leftMenus">
			<div class="searchBar">
				<input type="text" placeholder="搜索菜单..." v-model="keyword_menu">
				<i class="searchBtn fa fa-search"></i>
			</div>
			<ul class="menuWrap">
				<li v-for="(x,index) in menus" v-show="matchKeyword(x.name)" :key="x.id" class="items" :class="{active: acitiveMenuId == x.id}">
					<div class="itemWrap" @click="menuClick(x, index)" :title="x.name">
						<div class="icon" :class="x.icon"></div>
						<span class="text" v-text="x.name"></span>
						<span class="arrow fa fa-chevron-right"></span>
					</div>
				</li>
			</ul>
		</div>
		<div class="contentWrap">
            <router-view  @viewIn="viewIn" @addProvider="addProvider" @deleteProvider="deleteProvider"></router-view>
            <div v-show="showRouterViewLoading" class="loadingTips">
                <i class="fa fa-circle-o-notch fa-pulse"></i>
            </div>
		</div>
	    <div id="global_loadingBox">
            <i class="fa fa-circle-o-notch fa-pulse"></i>
        </div>
        <div id="global_confirmBox">
            <div class="wrap">
                <div class="box">
                    <div class="title">系统提示</div>
                    <p class="text"></p>
                    <div class="buttons">
                        <button class="cancel">取消</button>
                        <button class="confirm">确定</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="global_simpleTips" @click="hideSimpleTips">
            <div class="box">
                <i class="icon"></i>
                <span class="text"></span>
            </div>
        </div>
	</div>
</template>

<script>
import util from './modules/util';
export default {
	data () {
		return {
            acitiveMenuId: 0,
            showRouterViewLoading: true,
            keyword_menu: '',
			menus: [
                {
                    id: 0,
                    icon: 'fa fa-home',
                    name: '首页',
                    url: '/home'
                }
            ]
		}
    },
	methods: {
        hideSimpleTips () {
            util.simpleTips.hide();
        },
        matchKeyword (memuName) {
            return memuName.indexOf(this.keyword_menu) !== -1;
        },
		menuClick (menuObj, index) {
            if(this.acitiveMenuId == menuObj.id)
                return;
            this.acitiveMenuId = menuObj.id;
            this.showRouterViewLoading = true;
            if(menuObj.url.indexOf('supplier') != -1){
                this.$router.push({
                    path: menuObj.url,
                    query: {
                        name: escape(menuObj.name),
                        code: menuObj.code
                    }
                });
            }else{
                this.$router.push(menuObj.url);
            }
        },
        viewIn () {
            this.showRouterViewLoading = false;
        }
	},
	mounted () {
        this.$router.push('home');
	}
}
</script>

<style lang="less" scoped>
@import './styles/init.less';
#MYAPP{
    height: 100%;
	width: 100%;
	overflow: hidden;
	padding-top: @topHeight;
	padding-left: @leftWidth;
	background-color: #fff;
	.header{
        position: fixed;
        z-index: 999;
		width: 100%;
		height: @topHeight;
		top: 0px;
		left: 0px;
		background-color: @theme;
		.logo{
			height: 100%;
			width: @leftWidth;
			display: inline-block;
			background-color: darken(@theme, 8%);
			padding: 0px 12px;
			img{
				display: inline-block;
				vertical-align: -10px;
			}
			.title{
				color: #cde;
				display: inline-block;
				height: @topHeight;
				line-height: @topHeight;
				text-align: center;
				font-size: 18px;
			}
		}
	}
	.leftMenus{
		position: fixed;
        z-index: 999;
		background-color: @deepGray;
		width: @leftWidth;
		bottom: 0px;
		left: 0px;
        top: @topHeight;
        overflow: auto;
		.searchBar{
			width: 90%;
			height: 35px;
			margin: 20px auto;
			input{
                .radius(3px);
                .animation();
				background-color: lighten(@deepGray, 14%);
				height: 100%;
				width: 100%;
				font-size: 14px;
				padding: 0px 10px;
				padding-right: 30px;
				border: none;
				color: @fontColorSS;
				&:focus{
					background-color: #fff;
					color: @fontColorS;
				}
			}
			.searchBtn{
				font-size: @fontXL;
				position: absolute;
				width: 30px;
				height: 100%;
				right: 0px;
				top: 0px;
				color: @fontColorSS;
				line-height: 35px;
			}
		}
		.menuWrap{
            overflow: auto;
			.items{
				.itemWrap{
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
					height: 44px;
					line-height: 44px;
					padding: 0px 20px 0px 10px;
					color: #b8c7ce;
					font-size: @fontL;
					.animation();
					.icon{
						font-size: @fontXXXL;
						margin-right: 4px;
					}
					.arrow{
						position: absolute;
						top: 0px;
						bottom: 0px;
						right: 10px;
						margin: auto;
						font-size: @fontS;
						height: 16px;
						line-height: 16px;
					}
					&:hover{
						background-color: lighten(@deepGray, 10%);
						cursor: pointer;
					}
                }
                &.active{
                    .itemWrap{
                        border-left: 4px solid @theme;
                    }
                }
			}
		}
	}
	.contentWrap{
		width: 100%;
        height: 100%;
        padding: 15px;
        overflow: auto;
        .loadingTips{
            .loadingTips(40px);
        }
	}
}
</style>