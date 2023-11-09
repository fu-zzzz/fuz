<template>
    <div class="shoptwo">
        <div class="one">
            <div class="oneleft">猜你喜欢</div>
            <div class="oneright">
                <img src="../assets/2.svg" class="oneimg">
                <span>换一换</span>
            </div>
        </div>
    </div>

</template>
<script>
export default{
		name:'shoptwo',
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
			}
		}
	}

</script>

<style scoped>
.shoptwo{
    widows: 100%;
    height: 13.25rem;
    padding: 0 20px;
    box-sizing: border-box;
}
.one{
    widows: 100%;
    height: 1.37rem;
}
.oneleft{
    width: 3.9rem;
	height: 1.37rem;
	color: rgba(56, 56, 56, 1);
	font-size: 0.94rem;
	line-height: 1.37rem;
	font-weight: bold;
    float: left;
}
.oneright{
    width: 4rem;
    height: 1.37rem;
    float: right;
    color: rgba(144, 192, 239, 1);
	font-size: 0.69rem;
	line-height: 1.37rem;
	text-align: center;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.oneimg{
    width: 1rem;
    height: 1rem;
}

</style>