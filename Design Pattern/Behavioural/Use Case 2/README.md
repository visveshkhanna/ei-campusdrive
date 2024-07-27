# Stock Investor

This is a Stock (Subject), Investor (Observer) model that uses the Observer pattern which monitors the Stock's price changes and notifies the Investors of the price changes.

## Use Case

The use case is to create a Stock (Subject) that can notify its Observers of price changes. The Stock should have a setPrice method that updates the price and notifies the Observers. The Observers should be able to register themselves with the Stock and receive price updates.

## Implementation

The Stock class has a setPrice method that updates the price and notifies the Observers. The Observer class has a update method that is called when the Stock's price changes. The Investor class is an Observer that can register itself with the Stock and receive price updates. The Investor class has a setPrice method that updates the price and notifies the Observers.

The Stock and Investor classes are implemented using the Observer pattern. The Stock class has a setPrice method that updates the price and notifies the Observers. The Observer class has a update method that is called when the Stock's price changes. The Investor class is an Observer that can register itself with the Stock and receive price updates. The Investor class has a setPrice method that updates the price and notifies the Observers.