const middleware = {}

middleware['adminonly'] = require('../middleware/adminonly.ts')
middleware['adminonly'] = middleware['adminonly'].default || middleware['adminonly']

middleware['adminvendor'] = require('../middleware/adminvendor.ts')
middleware['adminvendor'] = middleware['adminvendor'].default || middleware['adminvendor']

middleware['vendor'] = require('../middleware/vendor.ts')
middleware['vendor'] = middleware['vendor'].default || middleware['vendor']

export default middleware
