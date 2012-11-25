
package com.custpurchasedb.data;

import java.io.Serializable;


/**
 *  custpurchaseDB.LineitemId
 *  11/24/2012 18:35:07
 * 
 */
public class LineitemId
    implements Serializable
{

    private Integer orderid;
    private Integer itemid;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof LineitemId)) {
            return false;
        }
        LineitemId other = ((LineitemId) o);
        if (this.orderid == null) {
            if (other.orderid!= null) {
                return false;
            }
        } else {
            if (!this.orderid.equals(other.orderid)) {
                return false;
            }
        }
        if (this.itemid == null) {
            if (other.itemid!= null) {
                return false;
            }
        } else {
            if (!this.itemid.equals(other.itemid)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.orderid!= null) {
            rtn = (rtn + this.orderid.hashCode());
        }
        rtn = (rtn* 37);
        if (this.itemid!= null) {
            rtn = (rtn + this.itemid.hashCode());
        }
        return rtn;
    }

    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    public Integer getItemid() {
        return itemid;
    }

    public void setItemid(Integer itemid) {
        this.itemid = itemid;
    }

}
