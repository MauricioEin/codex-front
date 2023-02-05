import { createStore } from 'vuex'
import { codeService } from "../services/code.service"

export const store = createStore({
  state: {
    blocks: null,
  },
  getters: {
    getBlocks({ blocks }) {
      return blocks
    }
  },
  mutations: {
    setBlocks(state, { blocks }) {
      state.blocks = blocks
    },
    updateBlock(state, { block }) {
      const idx = state.blocks.findIndex(b => b._id === block._id)
      state.blocks.splice(idx, 1, block)
    } 
  },
  actions: {
    async loadBlocks({ commit }) {
      try {
        const blocks = await codeService.query()
        commit({ type: 'setBlocks', blocks })
      } catch (err) {
        console.log('err', err)
        // showErrorMsg(`Something went wrong, please try again! ${err}`)
      }
    },

      async updateBlock({ commit }, { block }) {
      try {
        const updatedBlock = await codeService.updateBlock(block)
        commit({ type: 'updateBlock', block: updatedBlock })
      } catch (err) {
        console.log('err', err)
        // showErrorMsg('Fail to update the block, please try again!')
        // await dispatch({ type: err.message })
      }
    }
  }
})
