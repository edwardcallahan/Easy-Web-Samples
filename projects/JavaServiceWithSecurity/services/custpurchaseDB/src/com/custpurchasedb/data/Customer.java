
package com.custpurchasedb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  custpurchaseDB.Customer
 *  03/05/2013 19:51:36
 * 
 */
public class Customer {

    private Integer custid;
    private String company;
    private String address;
    private String city;
    private String state;
    private String zip;
    private String imageurl;
    private String twitter;
    private Set<com.custpurchasedb.data.Purchase> purchases = new HashSet<com.custpurchasedb.data.Purchase>();

    public Integer getCustid() {
        return custid;
    }

    public void setCustid(Integer custid) {
        this.custid = custid;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getImageurl() {
        return imageurl;
    }

    public void setImageurl(String imageurl) {
        this.imageurl = imageurl;
    }

    public String getTwitter() {
        return twitter;
    }

    public void setTwitter(String twitter) {
        this.twitter = twitter;
    }

    public Set<com.custpurchasedb.data.Purchase> getPurchases() {
        return purchases;
    }

    public void setPurchases(Set<com.custpurchasedb.data.Purchase> purchases) {
        this.purchases = purchases;
    }

}
