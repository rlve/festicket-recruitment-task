# Festicket recruitment task

Radosław Kamiński

# Instructions

## Preconditions

1. JDK must be installed on the machine.
2. Chrome must be installed on the machine.
3. Install dependencies

```sh
npm i
```

## Execution

#### Run tests

```sh
npm run test
```

There are three test specs that will be executed sequentially and not concurrently. In this way, it will be easier to observe how tests work.

#### Generate report

```sh
npm run report
```

# Analysis

#### Issues and/or challenges you’ve come across and how did you overcome them?

The main challenge for me was to figure out how to best choose Selenium locators for elements in application with generated classes. I don't know yet what is the best practice in such a case.

While testing Festicket page, I used many locators based on text or a partial text of an element. I found it quite handy. However, it may be not the best option in application with many possible languages or if texts are changed often.

#### If you had more time what would you do differently?

I would spend more time figuring out how to organise page-objects. Dividing by pages (e.g. home page, search page) or features (login, search, festivals) would be better.

I would try to create a more reusable method for adding items to the basket. At the moment it's possible to add only coaches.

I would add the possibility to choose the time of coach departure. For now, it chooses the first available.

#### What other test cases would you automate and why?

#### What dependencies or 3rd party frameworks/libs/modules used and why?

I used WebdriverIO as a framework to write Selenium tests. I chose it mainly because I'm familiar with it. I'm using it in my current job. It's a mature open-source framework with a big community and integrations with plenty of tools, services and reporters which may be helpful in test automation.

I used TypeScript to write tests. WebdriverIO allows doing that quite painlessly. Dynamic typing in JS may be quite handy, but more often it caused runtime errors which were hard to debug and very frustrating for me. It may be nerve-racking when developing complicated selenium test which takes a longer time to execute. TypeScript eliminates it and adds excellent IDE support.

I wrote test specs using Mocha with Chai assertions. It's concise and easy to read style.

I added the possibility to generate Allure reports. Generated HTML reports look impressive and are very detailed.

#### Resources used

WebdriverIO documentation.
