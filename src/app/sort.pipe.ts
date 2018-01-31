import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sort'})
export class SortPipe implements PipeTransform {
  
  // Angular templating allows pipe directives to manipulate data via a "transform" func (below)
  // Pipes are called on data on the template via {{ data | pipeName:'key' }}, key being additional args
  // The following public functions sort each episode by title, episode, rating, votes, and season

  sortTitle(items) {
    return items.sort((a, b) => {
      let title1: string = a.originalTitle
      let title2: string = b.originalTitle
      return title1.toString().localeCompare(title2)
    })
  }

  sortEpNum(items) {
    return items.sort((a, b) => {
      let ep1 = a.episodeNumber
      let ep2 = b.episodeNumber
      return (ep1 < ep2) ? -1 : (ep1 > ep2) ? 1 : 0
    })
  }

  sortRating(items) {
    return items.sort((a, b) => {
      let rating1 = a.averageRating
      let rating2 = b.averageRating
      return (rating1 < rating2) ? -1 : (rating1 > rating2) ? 1 : 0
    })
  }

  sortVotes(items) {
    return items.sort((a, b) => {
      let votes1 = a.numVotes
      let votes2 = b.numVotes
      return (votes1 < votes2) ? -1 : (votes1 > votes2) ? 1 : 0
    })
  }

  sortSeason(items) {
    return items.sort((a, b) => {
      let s1 = a.seasonNumber
      let s2 = b.seasonNumber
      let ep1 = a.episodeNumber
      let ep2 = b.episodeNumber
      return s1 - s2 || ep1 - ep2
    })
  }
 
  transform(items: any[], orderBy: string): any {

    if (!items) { return []; }
    if (!orderBy) { return items; }

    // use switch case to optimize performance
    switch (orderBy) {
      case ("title"): return this.sortTitle(items)
      case ("titleReverse"): return this.sortTitle(items).reverse()
      case ("epNum"): return this.sortEpNum(items)
      case ("epNumReverse"): return this.sortEpNum(items).reverse()
      case ("rating"): return this.sortRating(items).reverse()
      case ("ratingReverse"): return this.sortRating(items)
      case ("votes"): return this.sortVotes(items).reverse()
      case ("votesReverse"): return this.sortVotes(items)
      case ("season"): return this.sortSeason(items)
      case ("seasonReverse"): return this.sortSeason(items).reverse()
    }
    
  }

}