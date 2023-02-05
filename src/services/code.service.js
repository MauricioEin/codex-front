import { httpService } from './http.service.js'
import { socketService, SOCKET_EVENT_CODE_UPDATED } from './socket.service.js';

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
        const savedBlock = await httpService.put(`code/${block._id}`, block)
        return savedBlock
    } catch (err) {
        throw err
    }
}
