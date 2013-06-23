
package com.custpurchasedb.data;



/**
 *  custpurchaseDB.Lineitem
 *  06/22/2013 17:25:51
 * 
 */
public class Lineitem {

    private Integer lineitemid;
    private Purchase purchase;
    private Item item;
    private Integer quantity;

    public Integer getLineitemid() {
        return lineitemid;
    }

    public void setLineitemid(Integer lineitemid) {
        this.lineitemid = lineitemid;
    }

    public Purchase getPurchase() {
        return purchase;
    }

    public void setPurchase(Purchase purchase) {
        this.purchase = purchase;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

}
