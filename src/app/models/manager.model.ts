import { Shop } from './shop.model';

export interface Manager {
    id: string;
    fullName: string;
    logo: string;
    shops?: Array<Shop>
}
