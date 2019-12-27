// 应用mutations,不直接操作
export const setUser = ({commit}, user) =>{
  commit('userStatus', user)
}
