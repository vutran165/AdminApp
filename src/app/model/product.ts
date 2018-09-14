import { EntityBase } from '../shared/entityBase';

export class ProductEntity extends EntityBase{
    // ProductID : string;
     name : string;
     productNumber: string;
     makeFlag: string;
     finishedGoodsFlag: string;
     color: string;
     safetyStockLevel: string;
     reorderPoint: string;
     standardCost: string;
     listPrice: string;
     size: string;
     sizeUnitMeasureCode: string;
     weightUnitMeasureCode: string;
     seight: string;
     daysToManufacture: string;
     productLine: string;
     class: string;
     style: string;
     productSubcategoryID: string;
     productModelID: string;
     sellStartDate: string;
     sellEndDate: string;
     discontinuedDate: string;
     rowguid: string;
    // modifiedDate: string;

    constructor(){
        super();
        this.name = ' ';
        this.productNumber = ' ';
        this.makeFlag = ' ';
        this.finishedGoodsFlag = ' ';
        this.color = ' ';
        this.safetyStockLevel = ' ';
        this.reorderPoint = ' ';
        this.standardCost = ' ';
        this.listPrice = ' ';
        this.size = ' ';
        this.sizeUnitMeasureCode = ' ';
        this.weightUnitMeasureCode = ' ';
        this.seight = ' ';
        this.daysToManufacture = ' ';
        this.productLine = ' ';
        this.class = ' ';
        this.style = ' ';
        this.productSubcategoryID = ' ';
        this.productModelID = ' ';
        this.sellStartDate = ' ';
        this.sellEndDate = ' ';
        this.discontinuedDate = ' ';
        this.rowguid = ' ';
    }
}

