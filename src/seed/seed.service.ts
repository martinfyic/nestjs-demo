import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { PokemonToInsert, PokeResponse } from './interfaces';
import { AxiosAdapter } from 'src/common/http-adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});

    const pokemonToInsert: PokemonToInsert[] = [];

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );

    data.results.forEach(async ({ name, url }) => {
      const segment = url.split('/');
      const no: number = +segment.at(-2);

      pokemonToInsert.push({ name, no, url });
      await this.pokemonModel.insertMany(pokemonToInsert);
    });

    return 'Seed executed';
  }
}
