const CreateController = require('./controllers/CreateControlle');

const routes = express.Router();

routes.post('/create', CreateController.index);

module.exports = routes;