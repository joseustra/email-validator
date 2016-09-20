import test from 'ava';
import validator from './';

test(t => {
    // Valid formats
    t.true(validator("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@letters-in-local.org"))
    t.true(validator("01234567890@numbers-in-local.net"))
    t.true(validator("country-code-tld@sld.rw"))
    t.true(validator("local@sld.newTLD"))
    t.true(validator("the-total-length@of-an-entire-address.cannot-be-longer-than-two-hundred-and-fifty-four-characters.and-this-address-is-254-characters-exactly.so-it-should-be-valid.and-im-going-to-add-some-more-words-here.to-increase-the-lenght-blah-blah-blah-blah-bla.org"))
    t.true(validator("the-character-limit@for-each-part.of-the-domain.is-sixty-three-characters.this-is-exactly-sixty-three-characters-so-it-is-valid-blah-blah.com"))
    t.true(validator("local@sub.domains.com"))
    t.true(validator("digit-only-domain@123.com"))
    t.true(validator("digit-only-domain-with-subdomain@sub.123.com"))

    // Invalid formats
    t.false(validator("@missing-local.org"))
    t.false(validator("! #$%`|@invalid-characters-in-local.org"))
    t.false(validator("(),:;`|@more-invalid-characters-in-local.org")),
        t.false(validator("<>@[]\\`|@even-more-invalid-characters-in-local.org"))
    t.false(validator(".local-starts-with-dot@sld.com"))
    t.false(validator("the-total-length@of-an-entire-address.cannot-be-longer-than-two-hundred-and-fifty-four-characters.and-this-address-is-255-characters-exactly.so-it-should-be-invalid.and-im-going-to-add-some-more-words-here.to-increase-the-lenght-blah-blah-blah-blah-bl.org"))
    t.false(validator("the-character-limit@for-each-part-of-the-domain-is-sixty-three-characters-this-is-exactly-sixty-four-characters-so-it-is-invalid-blah-blah.com"))
    t.false(validator("missing-at-sign.net"))
    t.false(validator("unbracketed-IP@127.0.0.1"))
    t.false(validator("invalid-ip@127.0.0.1.26"))
    t.false(validator("another-invalid-ip@127.0.0.256"))
    t.false(validator("IP-and-port@127.0.0.1:25"))
    t.false(validator("trailing-dots@test.de."))
    t.false(validator("dot-on-dot-in-domainname@te..st.de"))
    t.false(validator("dot-first-in-domain@.test.de"))
    t.false(validator("mg@ns.i"))
});
