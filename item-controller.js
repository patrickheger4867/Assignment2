const { getAllItems, getItemByitemId}= require("../services/item-service");

const getItemsRoute = server => {
    server.route({
        path:"/items",
        method:"GET",
        handler:(request, h) => {
            return getAllItems();
        }
    });
};

const getItemByItemIdRoute = server => {
    server.route({
        path: "/customers/{itemId}",
        method: "Get",
        handler: (request,h) => {
            const customer = getItemByitemId(request.params.itemId);

            if (!item) {
                return h.response().code(404);
            }
            return item;
        }
    });
};

const initItemControllers = erver => {
    getItemRoute(server);
    getItemByItemIdRoute(server);
};

module.exports = {
    initItemControllers
};