# Role-based Authorization Decorator

## Problem Statement

Create a user permissions system that dynamically adjusts the permissions of a user based on their role and additional granted permissions. The Decorator pattern can be used to add permissions to a base user role.

## Solution

The solution is implemented using the Decorator pattern. The `RoleDecorator` class is a base class that implements the `Permission` interface. It has a private `user` property that holds an instance of the `Permission` interface. The `RoleDecorator` class also has a `getPermissions()` method that returns an array of strings representing the permissions granted to the user.

## Usage

To use the `RoleDecorator` class, create a new instance of the class and pass in an instance of the `Permission` interface. The `RoleDecorator` class will then add the permissions granted to the user to the base user's permissions.