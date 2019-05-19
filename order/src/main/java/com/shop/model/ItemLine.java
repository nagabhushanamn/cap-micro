package com.shop.model;

import java.io.Serializable;


public class ItemLine implements Serializable {

	public ItemLine(int productId, int qty) {
		super();
		this.productId = productId;
		this.qty = qty;
	}

	public ItemLine() {
	}
	
	private int productId;
	private int qty;
	
	

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	@Override
	public String toString() {
		return "ItemLine [productId=" + productId + ", qty=" + qty + "]";
	}
}
