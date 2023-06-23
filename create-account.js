function createAccount(pin, amount = 0) {
    return {
        checkBalance(inputtedPin) {
            if(inputtedPin !== pin) return 'Invalid PIN.';

            return `$${amount}`;
        },

        deposit(inputtedPin, depositAmt) {
            if(inputtedPin !== pin) return 'Invalid PIN.';

            amount = depositAmt + amount;

            return `Successfully deposited $${depositAmt}. Current balance: $${amount}.`;
        },

        withdraw(inputtedPin, withdrawAmt) {
            if(inputtedPin !== pin) return 'Invalid PIN.';

            if (withdrawAmt > amount) {
                return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
            } else {
                amount = amount - withdrawAmt;
                return `Successfully withdrew $${withdrawAmt}. Current balance: $${amount}.`;
            }
        },

        changePin(inputtedPin, newPin) {
            if(inputtedPin !== pin) return 'Invalid PIN.';

            pin = newPin;

            return 'PIN successfully changed!'
        }
    }
}

module.exports = { createAccount };
