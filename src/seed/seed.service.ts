import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { PokemonToInsert, PokeResponse } from './interfaces';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const pokemonToInsert: PokemonToInsert[] = [];

    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
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
