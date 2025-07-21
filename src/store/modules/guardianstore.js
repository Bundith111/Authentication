import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGuardianStore = defineStore('guardian', () => {
  const guardianList = ref([])

  const addGuardian = (guardian) => {
    guardianList.value.push(guardian)
  }

  return {
    guardianList,
    addGuardian
  }
})
