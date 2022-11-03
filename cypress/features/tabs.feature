# cypress/features/tabs.feature
Feature: 3 Tabs
  Scenario: Tab One 
    Given I visit the website
    When I view tab one
    Then Tab one contains the expected content
  Scenario: Tab Two
    Given I visit the website
    When I view tab two
    Then Tab two contains the expected content
  Scenario: Tab Three 
    Given I visit the website
    When I view tab three
    Then Tab three contains the expected content