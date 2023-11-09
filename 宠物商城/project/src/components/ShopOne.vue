<template>
<div class="shopone">
		<van-checkbox class="check" v-model="info.active"></van-checkbox>
<!-- 		<input type="checkbox" class="check" v-model="info.active"> -->
		<div class="info">
			<img :src="info.img">
			<div class="title">{{info.title}}</div>
		</div>
		<div class="pic">¥{{info.pic}}</div>
		<div class="nums">
			<div class="jian btn" @click="jian">-</div>
			<span>{{info.gmnum}}</span>
			<div class="add btn" @click="add">+</div>
		</div>
		<div class="del" @click="del">删除</div>
	</div>
</template>

<script>
export default{
		name:'shopone',
		data(){
			return{
				
			}
		},
		// 接收父组件传递的值
		props:['info','index'],
		methods:{
			add(){
				// console.log(this.index)
				// 触发父组件绑定addNum
				this.$emit('addNum',this.index)
			},
			jian(){
				this.$emit('jianNum',this.index)
			},
			del(){
				// console.log(this.info)
				// this.$http.delcart(this.info).then(data=>{
				// 	console.log(data)
				// })
				this.$emit('delNum',this.index)
			}
		}
	}
</script>

<style scoped>
.shopone{
		width:100%;
		height:5rem;
		display:flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.check{
		width:1.5rem;
		height:1.5rem;
		display:block;
	}
	.info{
		width:7.25rem;
		height:100%;
		display: flex;
		align-items: center;;
	}
	.info>img{
		width: 4rem;
		height: 4rem;
	}
	.title{
		color: rgba(80, 80, 80, 1);
		font-size: 0.62rem;
		line-height: 150%;
		text-align: left;
	}
	.pic{
		width:3rem;
		height:100%;
		color: rgba(56, 56, 56, 1);
		font-size: 1.12rem;
		line-height: 5rem;
		text-align: left;
		font-weight: bold;
	}
	.nums{
		width:4.69rem;
		height:100%;
		/* background:yellow; */
		display:flex;
		justify-content: space-between;
		align-items: center;
	}
	.btn{
		width:1.37rem;
		height:1.37rem;
		border-radius: 1.37rem;
		border:1px solid skyblue;
		text-align: center;
		line-height: 1.37rem;
		font-size:0.7rem;
	}
	.del{
		width: 2rem;
		height: 4rem;
		line-height: 4rem;
		text-align: center;

	}
</style>