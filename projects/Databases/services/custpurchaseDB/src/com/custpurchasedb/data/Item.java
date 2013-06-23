
package com.custpurchasedb.data;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;


/**
 *  custpurchaseDB.Item
 *  06/22/2013 17:25:51
 * 
 */
public class Item {

    private Integer itemid;
    private String itemname;
    private BigDecimal price;
    private Set<com.custpurchasedb.data.Lineitem> lineitems = new HashSet<com.custpurchasedb.data.Lineitem>();

    public Integer getItemid() {
        return itemid;
    }

    public void setItemid(Integer itemid) {
        this.itemid = itemid;
    }

    public String getItemname() {
        return itemname;
    }

    public void setItemname(String itemname) {
        this.itemname = itemname;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Set<com.custpurchasedb.data.Lineitem> getLineitems() {
        return lineitems;
    }

    public void setLineitems(Set<com.custpurchasedb.data.Lineitem> lineitems) {
        this.lineitems = lineitems;
    }

}
