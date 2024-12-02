
abstract class FavoriteManager {
    protected favs: string[] = [];
    abstract addFavs(item: string): void;
    getFavs(): string[] {
        return this.favs;
    }
}

class MoviesFavoriteManager extends FavoriteManager {
    addFavs(item: string): void {
        if (!this.favs.includes(item)) {
            this.favs.push(item);
            this.favs.sort();
        }
    }
}

class BooksFavoriteManager extends FavoriteManager {
    addFavs(item: string): void {
        this.favs.unshift(item);
    }
}

const moviesManager = new MoviesFavoriteManager();
moviesManager.addFavs("Star Wats A VIngança dos Sith");
moviesManager.addFavs("Star Wars the last Jedi");
moviesManager.addFavs("Tha Handmaiden");
moviesManager.addFavs("Carol (2015)");

console.log("Filmes Favoritos:", moviesManager.getFavs());

const booksManager = new BooksFavoriteManager();
booksManager.addFavs("diario de um banana");
booksManager.addFavs("livro da kefera");
booksManager.addFavs("livro do rezendevil");
console.log("Livros Favoritos:", booksManager.getFavs());
