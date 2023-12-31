//GET => Buscar uma recurso no backend
//Post => Criar uma recurso no backend
//PUT => Editar ou atualizar um recurso no backend
//PATCH => Atualizar um recurso específico no backend
// DELETE => Deleter um recurso no backend

const users = []

import http from 'node:http'

import { json } from './middlewares/json.js'
import { routes } from './middlewares/routes.js'

const server = http.createServer(async  (req, res) => {
    const { method, url } = req

    await json(req, res)

    const route = routes.find(route => {
        return route.method === method && route.path === url
    })
    
if (route) {
    return route.handler(req, res)
}

    return res.writeHead(404).end('Not found')
})

server.listen(3333)

// Teste git