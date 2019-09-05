export const state = () => ({
  naves:['企业简介','核心团队','投资机构','社会荣誉'],
  showContent: 1
})
export const mutations = {
  changeContent (state, number){
        state.showContent = number
    }
}