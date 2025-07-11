import crud from '../../api/crud'

// initial state
const state = () => ({
  model: {
    name: "users" ,
    title: "អ្នកប្រើប្រាស់" 
  },
  records: [] ,
  record: null ,
  name : 'No name'
})

// getters
const getters = {
  getRecords (state, getters, rootState) {
    return state.records
  },
  getRecord (state, getters, rootState) {
    return state.record
  },
  getName(state , getters, rootState){
    return state.name
  }
}

// actions
const actions = {
  async list ({ state, commit, rootState },params) {
    return await crud.list(import.meta.env.VITE_API_SERVER+"/"+state.model.name + "?" + new URLSearchParams({
        search: params.search ,
        perPage: params.perPage ,
        page: params.page
      }).toString()
    )
  },
  async read ({ state, commit, rootState },params) {
    return await crud.read(import.meta.env.VITE_API_SERVER+"/"+state.model.name+"/"+params.id+'/read')
  },
  async create ({ state, commit, rootState },params) {
    return await crud.create(import.meta.env.VITE_API_SERVER+"/"+state.model.name+"/create",params)
  },
  async update ({ state, commit, rootState },params) {
    return await crud.update(import.meta.env.VITE_API_SERVER+"/"+state.model.name+"/update",params)
  },
  async delete ({ state, commit, rootState },params) {
    return await crud.delete(import.meta.env.VITE_API_SERVER+"/"+state.model.name+"/"+params.id+"/delete")
  },
  async updateName({ state, commit, rootState },params) {
    return await ( state.name + " - Updated by action" )
  }
}

// mutations
const mutations = {
  setRecords (state, records) {
    state.records = records
  },
  setRecord (state, record) {
    state.record = record
  },
  setName(state , name){
    state.name = name + " Updated by commit"
  }
}

export default {
  namespaced: true,
  state, // Property
  getters, // Read value from state
  actions, // Do crud funcions with from server
  mutations // Set value to state
}