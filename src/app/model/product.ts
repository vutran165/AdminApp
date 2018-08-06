import { EntityBase } from '../shared/entityBase';


export class ProductEntity extends EntityBase {
    // ProductID : string;
    public name : string;
    public productNumber: string;
    public makeFlag: string;
    public finishedGoodsFlag: string;
    public color: string;
    public safetyStockLevel: string;
    public reorderPoint: string;
    public standardCost: string;
    public listPrice: string;
    public size: string;
    public sizeUnitMeasureCode: string;
    public weightUnitMeasureCode: string;
    public seight: string;
    public daysToManufacture: string;
    public productLine: string;
    public class: string;
    public style: string;
    public productSubcategoryID: string;
    public productModelID: string;
    public sellStartDate: string;
    public sellEndDate: string;
    public discontinuedDate: string;
    public rowguid: string;
    // modifiedDate: string;
    
}