import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AnimalService } from './api/animal.service';
import { AstronomicalObjectService } from './api/astronomicalObject.service';
import { BookService } from './api/book.service';
import { BookCollectionService } from './api/bookCollection.service';
import { BookSeriesService } from './api/bookSeries.service';
import { CharacterService } from './api/character.service';
import { ComicCollectionService } from './api/comicCollection.service';
import { ComicSeriesService } from './api/comicSeries.service';
import { ComicStripService } from './api/comicStrip.service';
import { ComicsService } from './api/comics.service';
import { CompanyService } from './api/company.service';
import { ConflictService } from './api/conflict.service';
import { DataVersionService } from './api/dataVersion.service';
import { ElementService } from './api/element.service';
import { EpisodeService } from './api/episode.service';
import { FoodService } from './api/food.service';
import { LiteratureService } from './api/literature.service';
import { LocationService } from './api/location.service';
import { MagazineService } from './api/magazine.service';
import { MagazineSeriesService } from './api/magazineSeries.service';
import { MaterialService } from './api/material.service';
import { MedicalConditionService } from './api/medicalCondition.service';
import { MovieService } from './api/movie.service';
import { OccupationService } from './api/occupation.service';
import { OrganizationService } from './api/organization.service';
import { PerformerService } from './api/performer.service';
import { SeasonService } from './api/season.service';
import { SeriesService } from './api/series.service';
import { SoundtrackService } from './api/soundtrack.service';
import { SpacecraftService } from './api/spacecraft.service';
import { SpacecraftClassService } from './api/spacecraftClass.service';
import { SpeciesService } from './api/species.service';
import { StaffService } from './api/staff.service';
import { TechnologyService } from './api/technology.service';
import { TitleService } from './api/title.service';
import { TradingCardService } from './api/tradingCard.service';
import { TradingCardDeckService } from './api/tradingCardDeck.service';
import { TradingCardSetService } from './api/tradingCardSet.service';
import { VideoGameService } from './api/videoGame.service';
import { VideoReleaseService } from './api/videoRelease.service';
import { WeaponService } from './api/weapon.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AnimalService,
    AstronomicalObjectService,
    BookService,
    BookCollectionService,
    BookSeriesService,
    CharacterService,
    ComicCollectionService,
    ComicSeriesService,
    ComicStripService,
    ComicsService,
    CompanyService,
    ConflictService,
    DataVersionService,
    ElementService,
    EpisodeService,
    FoodService,
    LiteratureService,
    LocationService,
    MagazineService,
    MagazineSeriesService,
    MaterialService,
    MedicalConditionService,
    MovieService,
    OccupationService,
    OrganizationService,
    PerformerService,
    SeasonService,
    SeriesService,
    SoundtrackService,
    SpacecraftService,
    SpacecraftClassService,
    SpeciesService,
    StaffService,
    TechnologyService,
    TitleService,
    TradingCardService,
    TradingCardDeckService,
    TradingCardSetService,
    VideoGameService,
    VideoReleaseService,
    WeaponService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
