# MethaChart v1.3.1 beta
MethaChart is an application that helps pharmacies reliable build methadone log forms. It is a
simple and lightweight system that achieves the following goals:

1. Safe and efficient administration of methadone
2. Reduced documentation burden

This application is in use by a pharmacy today since Summer 2016. This application will be introduced to
other pharmacies in the future once certain core features (e.g. multi-day carries) are implemented and
licensing has been figured out.

Since the output of this application directs the dosing of methadone that patients receive, handling
of dates and numbers must be tested thoroughly. Several log forms of varying doses and dates should be
printed out in real life tests to ensure the output is acceptable.

## Privacy
This application does not store data. There are options to integrate with existing pharmacy databases,
but that will be in the distant future.

## Dates
All Dates must be represented either in the form 'MMM DD, YYYY' or 'MM DD YYYY'. This is 
intentional. This ensures that the user doesn't misread 'Jan 1 2016' as 'Jan 12, 2016' or make
stray pen marks on 'Jan 1, 2016' to make it look like 'Jan 11, 2016'. The leading zero is
important and should stay there.
;tldr
BAD: 'Jan 1, 2016',
GOOD: 'Jan 01, 2016'

This application accounts for leap years.
Dates are supported up to year 2100.