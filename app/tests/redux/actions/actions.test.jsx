import expect, { createSpy, spyOn, isSpy } from 'expect';
import { addUser, fetchUserData } from "Actions";


describe('Actions', () => {
    describe('Add User Action', () => {
        it('should return a user ', () => {
            let action = {
                type: "ADD_USER",
                user: "ZiaulSarker".toLocaleLowerCase()
            };

            let res = addUser(action.user);
            expect(res).toEqual(action);
        });
    });
});