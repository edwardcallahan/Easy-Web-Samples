
package com.custpurchasedb.data;



/**
 *  custpurchaseDB.Lineitem
 *  11/24/2012 18:35:07
 * 
 */
public class Lineitem {

    private LineitemId id;
    private Purchase purchase;
    private Item item;
    private Integer quantity;

    public LineitemId getId() {
        return id;
    }

    public void setId(LineitemId id) {
        this.id = id;
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
