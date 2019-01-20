const { forwardTo } = require('prisma-binding')

const Query = {
  //items: forwardTo('db'),
  async items(parent, args, ctx, info) {
    const items = await ctx.db.query.items({ ...args })
    return items
  },
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  currentUser(parent, args, ctx, info) {
    // check if there is a current userId
    if (!ctx.request.userId) {
      return null
    }
    return ctx.db.query.user({
      where: { id: ctx.request.userId }
    }, info)

  }
}

module.exports = Query