"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDocumentTitle = useDocumentTitle;
const React = __importStar(require("react"));
// import type { DocumentTitleOptions } from './types';
/**
 * Set the document title for the active screen
 */
function useDocumentTitle(ref, { enabled = true, formatter = (options, route) => options?.title ?? route?.name, } = {}) {
    React.useEffect(() => {
        if (!enabled) {
            return;
        }
        const navigation = ref.current;
        if (navigation) {
            const title = formatter(navigation.getCurrentOptions(), navigation.getCurrentRoute());
            document.title = title;
        }
        return navigation?.addListener('options', (e) => {
            const title = formatter(e.data.options, navigation?.getCurrentRoute());
            document.title = title;
        });
    });
}
//# sourceMappingURL=useDocumentTitle.js.map