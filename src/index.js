class SmartCalculator {
	constructor(initialValue) {
		this.fullExpression = [initialValue];
		this.needAdd = false;
		this.needSubtract = false;
		this.needMultiply = false;
		this.needDivide = false;
		this.needPow = false;
	}

	add(number) {
		this.fullExpression.push('+', number);
		this.needAdd = true;
		return this;
	}

	subtract(number) {
		this.fullExpression.push('-', number);
		this.needSubtract = true;
		return this;
	}

	multiply(number) {
		this.fullExpression.push('*', number);
		this.needMultiply = true;
		return this;
	}

	devide(number) {
		this.fullExpression.push('/', number);
		this.needDivide = true;
		return this;
	}

	pow(number) {
		this.fullExpression.push('pow', number);
		this.needPow = true;
		return this;
	}


	valueOf()
	{

		if ( this.needPow )
		{
			for ( let i = 0; i < this.fullExpression.length; i++ )
			{
				if ( this.fullExpression[i] == 'pow' )
				{
					let firstNum = this.fullExpression[i - 1];
					let secondNum = this.fullExpression[i + 1];
					this.fullExpression.splice(i - 1, 3, Math.pow(firstNum, secondNum));
					i -= 2;
				}
			}
		}

		if ( this.needMultiply )
		{
			for ( let i = 0; i < this.fullExpression.length; i++ )
			{
				if ( this.fullExpression[i] == '*' )
				{
					let firstNum = this.fullExpression[i - 1];
					let secondNum = this.fullExpression[i + 1];
					this.fullExpression.splice(i - 1, 3, firstNum * secondNum);
					i -= 2;
				}
			}
		}

		if ( this.needDivide )
		{
			for ( let i = 0; i < this.fullExpression.length; i++ )
			{
				if ( this.fullExpression[i] == '/' )
				{
					let firstNum = this.fullExpression[i - 1];
					let secondNum = this.fullExpression[i + 1];
					this.fullExpression.splice(i - 1, 3, firstNum / secondNum);
					i -= 2;
				}
			}
		}

		if ( this.needSubtract )
		{
			for ( let i = 0; i < this.fullExpression.length; i++ )
			{
				if ( this.fullExpression[i] == '-' )
				{
					let firstNum = this.fullExpression[i - 1];
					let secondNum = this.fullExpression[i + 1];
					this.fullExpression.splice(i - 1, 3, firstNum - secondNum);
					i -= 2;
				}
			}
		}

		if ( this.needAdd )
		{
			for ( let i = 0; i < this.fullExpression.length; i++ )
			{
				if ( this.fullExpression[i] == '+' )
				{
					let firstNum = this.fullExpression[i - 1];
					let secondNum = this.fullExpression[i + 1];
					this.fullExpression.splice(i - 1, 3, firstNum + secondNum);
					i -= 2;
				}
			}
		}


		return this.fullExpression[0];
	}

}

module.exports = SmartCalculator;
