<template>
	<div class="addshops">
		<ul>
			<li>
				<span>种类</span>
				<input type="text" v-model="kind">
			</li>
			<li>
				<span>大分类</span>
				<input type="text" v-model="sort">
			</li>
			<li>
				<span>小分类</span>
				<input type="text" v-model="classify">
			</li>
			<li>
				<span>标题</span>
				<input type="text" v-model="title">
			</li>
			<li>
				<span>描述信息</span>
				<input type="text" v-model="msg">
			</li>
			<li>
				<span>价格</span>
				<input type="text" v-model="pic">
			</li>
			<li>
				<span>图片</span>
				<input type="text" v-model="imgs">
			</li>
			<li>
				<span>品牌</span>
				<input type="text" v-model="brand">
			</li>
			<li>
				<span>物理外形</span>
				<input type="text" v-model="shape">
			</li>
			<li>
				<span>适用对象</span>
				<input type="text" v-model="audience">
			</li>
			<li>
				<span>口味</span>
				<input type="text" v-model="taste">
			</li>
			<li>
				<span>颜色</span>
				<input type="text" v-model="color">
			</li>
			<li>
				<button @click="addshops">上传</button>
			</li>
		</ul>
		<img :src="img">
	</div>
</template>

<script>
	export default{
		data(){
			return{
				kind:'',
				sort:'',
				classify:'',
				title:'',
				msg:'',
				pic:'',
				imgs:'',
				brand:'',
				shape:'',
				audience:'',
				taste:'',
				color:'',
				img:'',
			}
		},
		methods:{
			addshops(){
				let datas ={
					kind:this.kind,
					sort:this.sort,
					classify:this.classify,
					title:this.title,
					msg:this.msg,
					pic:this.pic,
					imgs:this.imgs,
					brand:this.brand,
					shape:this.shape,
					audience:this.audience,
					taste:this.taste,
					color:this.color,
				}
				//上传商品信息
				this.$http.addshops(datas).then(data=>{
					if(data.s==200){
						console.log("上传成功")
						this.kind='';
						this.sort='';
						this.classify='';
						this.msg='';
						this.pic='';
						this.imgs='';
						this.brand='';
						this.shape='';
						this.audience='';
						this.taste='';
						this.color='';
					}else{
						console.log("上传失败")
					}
					
				})
			}
		},
		mounted(){
			//查找商品信息
			this.$http.findshops().then(data=>{
				//多个内容用&&隔开
				let image = data[0].imgs.split("&&")
				console.log(image)
				this.img=image[0]
			})
		}
	}
</script>

<style scoped>
	.addshops{
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		position: relative;
	}
	ul{
		width: 300px;
		height: 600px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	li{
		width: 100%;
		height: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 5px 0;
	}
	input{
		width: 200px;
		height: 30px;
		border: 0;
		padding: 0 10px;
	}
	button{
		width: 300px;
		height: 30px;
	}
	img{
		width: 200px;
		height: 300px;
		position: absolute;
		top: 10px;
		left: 10px;
	}
</style>