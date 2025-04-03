import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { HarrypotterService } from '../../services/harrypotter.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {
  characters: Character[] = [];
  constructor(private hpService: HarrypotterService) {}
  ngOnInit(): void {
    this.hpService.getAllCharacters().subscribe(data => {
      this.characters = data;
    });
  }
}
