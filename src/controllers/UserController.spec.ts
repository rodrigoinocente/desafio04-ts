import { Request, Response } from 'express'
import { UserController } from "./UserController";
import { UserService } from '../services/UserService'
import { makeMockResponse } from "../__mocks__/mockResponse.mock";

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn()
    }
    
    const userController = new UserController(mockUserService as UserService);

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: 'nath@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' })
    })
})


const mockRequest = {
    body: {
        name: 'nath',
        email: 'nath@test.com'
    }
} as Request

const mockResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
} as unknown as Response

describe('UserController', () => {
    const userController = new UserController()

    it('Deve criar um novo usuário', () => {
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.status).toHaveBeenCalledWith(201)
        expect(mockResponse.json)
    })
})
