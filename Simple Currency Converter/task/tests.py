from hstest import StageTest, CheckResult, dynamic_test, TestedProgram


class CurrencyConverter(StageTest):
    @dynamic_test
    def test1(self):
        main = TestedProgram()
        output = main.start()
        message = """Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP"""
        if message not in output.strip():
            return CheckResult.wrong('Your output should be like in the example!')
        return CheckResult.correct()


if __name__ == '__main__':
    CurrencyConverter('main').run_tests()