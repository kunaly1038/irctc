"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const login_helper_1 = require("../Helper_Page/login/login-helper");
describe('angularjs homepage todo list', function () {
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield login_helper_1.LoginHelper.loginInto();
    }));
    it('should add a todo', function () {
        protractor_1.browser.sleep(5000);
    });
});
//# sourceMappingURL=login-page-verification.js.map