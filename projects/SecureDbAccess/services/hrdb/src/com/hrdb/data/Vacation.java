
package com.hrdb.data;

import java.util.Date;


/**
 *  hrdb.Vacation
 *  03/13/2013 11:10:38
 * 
 */
public class Vacation {

    private Integer id;
    private Employee employee;
    private Date startdate;
    private Date enddate;
    private Integer tenantid;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Date getStartdate() {
        return startdate;
    }

    public void setStartdate(Date startdate) {
        this.startdate = startdate;
    }

    public Date getEnddate() {
        return enddate;
    }

    public void setEnddate(Date enddate) {
        this.enddate = enddate;
    }

    public Integer getTenantid() {
        return tenantid;
    }

    public void setTenantid(Integer tenantid) {
        this.tenantid = tenantid;
    }

}
