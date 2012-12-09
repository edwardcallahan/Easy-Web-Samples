
package com.custpurchasedb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  custpurchaseDB.Purchase
 *  11/24/2012 18:35:07
 * 
 */
public class Purchase {

    private Integer orderid;
    private Customer customer;
    private Date orderdate;
    private Set<com.custpurchasedb.data.Lineitem> lineitems = new HashSet<com.custpurchasedb.data.Lineitem>();

    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Date getOrderdate() {
        return orderdate;
    }

    public void setOrderdate(Date orderdate) {
        this.orderdate = orderdate;
    }

    public Set<com.custpurchasedb.data.Lineitem> getLineitems() {
        return lineitems;
    }

    public void setLineitems(Set<com.custpurchasedb.data.Lineitem> lineitems) {
        this.lineitems = lineitems;
    }

}
