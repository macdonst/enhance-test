import arc from '@architect/functions'
import render from '@architect/views/render.mjs'

export const handler = arc.http.async(http)

async function http(req) {
  const name = `Simon`
  return {
    html: render`<my-component name="${name}"></my-component>`
  }
}
