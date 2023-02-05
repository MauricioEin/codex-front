import { httpService } from './http.service.js'

export const codeService = {
    query,
    getById,
    updateBlock
}

async function query() {
    try {
        const blocks = await httpService.get('code')
        return blocks
    } catch (err) {
        throw err
    }
}

async function getById(blockId) {
    try {
        const block = await httpService.get(`code/${blockId}`)
        return block
    } catch (err) {
        throw err
    }
}

async function updateBlock(block) {
    try {
        const newBlock = await httpService.put(`code/${block._id}`, block)
        return newBlock
    } catch (err) {
        throw new Error('loadBlocks')
    }
}
