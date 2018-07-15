var Movie = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            React.createElement('li', {className: 'movieObject'},
                React.createElement(MovieTitle, {text: this.props.item.title}),
                React.createElement(MovieDesc, {text: this.props.item.desc}),
                React.createElement(Image, {src: this.props.item.image, alt: this.props.item.title})
            )
        )
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        text: React.PropTypes.string
    },
    render: function() {
        return React.createElement('h2', {className: 'movieTitle'}, this.props.text || 'ERROR TITLE!')
    }
});

var MovieDesc = React.createClass({
    propTypes: {
        text: React.PropTypes.string
    },
    render: function() {
        return React.createElement('p', {className: 'movieDesc'}, this.props.text || 'ERROR DESCRIPTION!')
    }
});

var Image = React.createClass({
    propTypes: {
        src: React.PropTypes.string,
        alt: React.PropTypes.string
    },
    render: function() {
        if ((this.props.src && this.props.alt) || (this.props.src && !this.props.alt)) {
            return React.createElement('img', {src: this.props.src, alt: this.props.alt, className: 'movieImage'})    
        } else {
            return React.createElement('p',{}, 'ERROR IMAGE!')
        }
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
    },
    {
        id: 6,
        title: 'Tarzan',
    }
];

var MoviesList = React.createClass({
    propTypes: {
        list: React.PropTypes.array.isRequired
    },
    render: function() {
        var moviesElements = this.props.list.map(function(movie) {
            return React.createElement(Movie, {item: movie, key: movie.id})    
        });
        return React.createElement('div', {className: 'movieContainer'},
            React.createElement('h1', {className: 'mainTitle'}, 'Lista filmów'),
            React.createElement('ul', {}, moviesElements)
        )
    }
});

var element = React.createElement(MoviesList, {list: movies});
ReactDOM.render(element, document.getElementById('app'));
