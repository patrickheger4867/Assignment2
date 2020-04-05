const Hapi = require('@hapi/hapi');
const uuid = require('uuid');
const {when} = require('jest-when');

const {initCartControllers} = require('../controllers/cart-controller');
const {initCustomerControllers} = require('../controllers/customer-controller');
const {getAllCarts, getCartByCartId, getCartsByCustomerId} = require('../services/cart-service');

jest.mock('../services/cart-service');

describe('Cart Controller', ()=> {
    let fakeServer,
        expectedCart,
        expectedCustomerId,
        expectedCartId,
        expectedCarts;

    beforeAll(() => {
        fakeServer = Hapi.server({
            host: 'localhost',
            port:3000
        });

        expectedCartId = uuid.v4();
        expectedCart = {
            customerId:expectedCustomerId,
            cartId:expectedCartId
        };

        expectedCarts = [expectedCartId, uuid.v4()];

        getAllCarts.mockReturnValue(expectedCarts);

        when(getCartByCartId).calledWith(expectedCartId).mockReturnValue(expectedCart);

        when(getCartsByCustomerId).calledWith(expectedCustomerId).mockReturnValue(expectedCart);

        initCartControllers(fakeServer);
        initCustomerControllers(fakeServer);
    });

    it('Should Return All Carts', async () => {
        const response = await fakeServer.inject({
            method: 'GET',
            url: '/carts'
        });

        expect(response.statusCode).toEqual(200);
        expect(response.result).toEqual(expectedCarts);
    });

    it('Should Return a Cart by its CartId', async () => {
        const response = await fakeServer.inject({
            method: 'GET',
            url: '/carts/${expectedCartId}'
        });

        expect(getCartByCartId).toHaveBeenCalledWith(expectedCartId);
        expect(response.statusCode).toEqual(200);
        expect(response.result).toEqual(expectedCart);
    });

    it('Should Return NOT FOUND if a Cart does not exist', async () => {
        const randomCartId = uuid.v4();

        const response = await fakeServer.inject({
            method:'GET',
            url: '/carts/${randomCartId}'
        });

        expect(getCartByCartId).toHaveBeenCalledWith(randomCartId);
        expect(response.statusCode).toEqual(404);
    });


});