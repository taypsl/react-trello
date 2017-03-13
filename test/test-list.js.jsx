import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import List from '../js/components/list';

describe('List component', function() {
    it('Renders the list and description',  function() {
        const url = "http://www.example.com/image.png";
        const title = "Example title";

        const renderer = TestUtils.createRenderer();
        renderer.render(<List title={title} />);
        const result = renderer.getRenderOutput();
	        result.props.className.should.equal('list-box');

        const p = result.props.children[0];
        p.type.should.equal('p');
        p.props.alt.should.equal(title);
        p.props.children.should.equal(title);
    });
});

