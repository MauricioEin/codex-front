import io from 'socket.io-client'

export const SOCKET_EMIT_SET_TOPIC = 'set-topic'
export const SOCKET_EVENT_JOINED_TOPIC = 'joined-topic'
export const SOCKET_EVENT_FELLOW_JOINED = 'fellow-joined'
export const SOCKET_EMIT_CODE_UPDATED = 'code-update'
export const SOCKET_EVENT_CODE_UPDATED = 'code-updated'


const baseUrl = (process.env.NODE_ENV === 'production') ? '' : '//localhost:3333'
export const socketService = createSocketService()

// for debugging from console
window.socketService = socketService

socketService.setup()


function createSocketService() {
  var socket = null
  const socketService = {
    setup() {
      socket = io(baseUrl)
    },
    on(eventName, cb) {
      socket.on(eventName, cb)
    },
    off(eventName, cb = null) {
      if (!socket) return;
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    emit(eventName, data) {
      console.log('emitting:', eventName, data)
      data = JSON.parse(JSON.stringify(data))
      socket.emit(eventName, data)
    },
    terminate() {
      socket = null
    },

  }
  return socketService
}

