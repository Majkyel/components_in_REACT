var Movie = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {text: this.props.item.title}),
                React.createElement(MovieDescription, {text: this.props.item.desc}),
                React.createElement(Image, {source: this.props.item.image, alt: this.props.item.title})
            )
        )
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        text: React.PropTypes.string.isRequired
    },
    render: function() {
        return React.createElement('h2', {}, this.props.text)
    }
});

var MovieDescription = React.createClass({
    propTyppes: {
        text: React.PropTypes.string.isRequired
    },
    render: function() {
        return React.createElement('p', {}, this.props.text);
    }
});

var Image = React.createClass({
    propTypes: {
        source: React.PropTypes.object.isRequired
    },
    render: function() {
        return React.createElement('img', {src: this.props.source, alt: this.props.alt})
    }
});

var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'This is film about young boy in magic world and her adventures',
        image: 'http://www.etv.co.za/sites/etv.co.za/files/styles/large/public/Movie-5-Harry-Potter.jpg?itok=ns52dciG'
    },
    {
        id: 2,
        title: 'Lion King',
        desc: 'Film about young lion and her father older lion',
        image: 'http://www.lionking.org/~nafklt/pictures/litho&other/tlkc.jpg'
    },
    {
        id: 3,
        title: 'Terminator',
        desc: 'This is film about future robots and show war with machine',
        image: 'http://critic.co.nz/files/article-5076.jpg'
    },
    {
        id: 4,
        title: 'Iron Man',
        desc: 'Iron Man is about man who create special suit and fith with bad people',
        image: 'https://hellotorrents.net/wp-content/uploads/2017/10/Iron-Man-1-Game.jpg'
    },
    {
        id: 5,
        title: 'Hulk',
        desc: 'Hulk is about man who is doctor and when is very nervouse he transform in green and very strenght monster',
        image: 'https://daveknickerbocker.files.wordpress.com/2013/05/hulk.jpg'
    }
];

var MoviesList = React.createClass({
    propTypes: {
        list: React.PropTypes.array.isRequired
    },
    render: function() {
        var moviesElements = this.props.list.map(function(movies) {
           return React.createElement(Movie, {item: movies, key: movies.id}) 
        });
        return React.createElement('div', {},
            React.createElement('h1', {}, 'Lista filmów'),
            React.createElement('ul', {}, moviesElements)
        );
    }
});

var element = React.createElement(MoviesList, {list: movies});
ReactDOM.render(element, document.getElementById('app'));
