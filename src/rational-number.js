import Integer from "./integer";
export class RationalNumber {
	constructor(a,b=1,simplified=false){
		a=a||0;
		this.simplified = !!simplified;
		if(a instanceof Integer){
			this.numerator = a.calc;
		}
		if(a instanceof RationalNumber){
			this.numerator
		}
		switch(typeof a){
			case "number":
				this.numerator = a;
				this.denominator = b;
				break;
			case "object":
				if(!a||!a.numerator||!a.denominator)a={
					numerator: 0,
					denominator: 1,
					simplified: true
				};
				this.numerator = a.numerator;
				this.denominator = a.denominator;
				this.simplified = true;
		}
		if(this.denominator<0){
			this.numerator*=-1;
			this.denominator*=-1;
		}
	}
	simplify(){
		if(this.simplified)return new RationalNumber(this.numerator,this.denominator,true);
		let gcd = Integer.gcd(this.numerator,this.denominator);
		return new RationalNumber(this.numerator/gcd,this.denominator/gcd,true);
	}
	get calc(){
		return this.numerator/this.denominator;
	}
	add_(...args){
		let v = new RationalNumber(...args);
		return new RationalNumber(this.numerator*v.denominator+v.numerator*this.denominator,this.denominator*v.denominator);
	}
	add(...args){
		return this.add_(...args).simplify();
	}
	subtract_(...args){
		let v = new RationalNumber(...args);
		return new RationalNumber(this.numerator*v.denominator-v.numerator*this.denominator,this.denominator*v.denominator);
	}
	subtract(...args){
		return this.subtract_(...args).simplify();
	}
	invert_(){
		return new RationalNumber(this.denominator,this.numerator,this.simplified);
	}
	invert(){
		return this.invert_().simplify();
	}
	multiply_(...args){
		let v = new RationalNumber(...args);
		return new RationalNumber(this.numerator*v.numerator,this.denominator*v.denominator);
	}
	multiply(...args){
		return this.multiply_(...args).simplify();
	}
	divide_(...args){
		let v = new RationalNumber(...args);
		return new RationalNumber(this.numerator*v.denominator,this.denominator*v.numerator);
	}
	divide(...args){
		return this.divide_(...args).simplify();
	}

}